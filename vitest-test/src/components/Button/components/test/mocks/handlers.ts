import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/todos', () => {
        return HttpResponse.json({
            "todos": [
                {
                    "id": 1,
                    "title": "Do something nice for someone I care about",
                    "completed": true,
                    "userId": 26
                },
            ]
        }, { status: 200 })
    }),
]