from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import EmissionRecord
from .serializers import EmissionRecordSerializer

import pandas as pd


@api_view(['GET'])
def get_records(request):

    records = EmissionRecord.objects.all()

    serializer = EmissionRecordSerializer(records, many=True)

    return Response(serializer.data)


@api_view(['POST'])
def upload_csv(request):

    file = request.FILES.get('file')

    if not file:
        return Response({"error": "No file uploaded"})

    df = pd.read_csv(file)

    for _, row in df.iterrows():

        suspicious = False

        if row['value'] > 1000:
            suspicious = True

        EmissionRecord.objects.create(
            source_type=row['source_type'],
            category=row['category'],
            date=row['date'],
            value=row['value'],
            unit=row['unit'],
            normalized_value=row['value'],
            suspicious=suspicious,
            raw_data=row.to_dict()
        )

    return Response({"message": "CSV uploaded successfully"})


@api_view(['PATCH'])
def update_status(request, record_id):

    try:

        record = EmissionRecord.objects.get(id=record_id)

        status = request.data.get('status')

        record.status = status

        record.save()

        return Response({"message": "Status updated"})

    except EmissionRecord.DoesNotExist:

        return Response({"error": "Record not found"})