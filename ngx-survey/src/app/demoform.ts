export const demoForm = [
    {
        "sectionStyle": "bold",
        "sectionValues": [
            "YES"
        ],
        "sectionValidation": {
            "minCount": 1
        },
        "name": "segmentType",
        "title": "1. Are you?",
        "subtitle": "Required",
        "position": 0,
        "items": []
    },
    {
        "sectionValidation": {
            "minCount": 1
        },
        "name": "content",
        "title": "2. What about this?",
        "subtitle": "Required",
        "position": 3,
        "items": [
            {
                "items": [
                    {
                        "label": "Excellent",
                        "optionValue": "Excellent"
                    },
                    {
                        "label": "Very Good",
                        "optionValue": "Very Good"
                    },
                    {
                        "label": "Fair",
                        "optionValue": "Fair"
                    },
                    {
                        "label": "Poor",
                        "optionValue": "Poor"
                    }
                ],
                "isSectionValueItem": true,
                "fieldValidation": {
                    "minCount": 1
                },
                "errors": [],
                "name": "content",
                "type": "radio",
                "position": 0
            }
        ]
    },
    {
        "sectionStyle": "bold",
        "title": "3. Describe something",
        "subtitle": "Required",
        "position": 6,
        "items": [
            {
                "singleSectionMode": true,
                "fieldValidations": {
                    "rules": [
                        {
                            "minLength": 1
                        }
                    ]
                },
                "name": "description",
                "type": "text",
                "label": "Type your comments here…",
                "position": 0
            }
        ]
    }
]
