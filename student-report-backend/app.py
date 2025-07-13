from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/api/student-report", methods=["GET"])
def get_report():
    with open("sample_data.json", "r") as file:
        data = json.load(file)

    report = []
    for i, student in enumerate(data["students"], start=1):
        name = student["name"]
        passed = student["test_cases"]["passed"]
        total = student["test_cases"]["total"]
        student_id = f"STD{i:03}"
        marks = round((passed / total) * 100)
        attendance = "Present" if passed > 0 else "Absent"

        report.append({
            "Serial No": i,
            "Student ID": student_id,
            "Student Name": name,
            "Test Cases Passed Out Of": f"{passed}/{total}",
            "Marks": marks,
            "Attendance": attendance
        })

    return jsonify(report)

if __name__ == "__main__":
    app.run(debug=True)
