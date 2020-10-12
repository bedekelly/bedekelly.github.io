from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/webhooks/answer")
def answer_call():
    for param_key, param_value in request.args.items():
        print("{}: {}".format(param_key, param_value))

    from_ = request.args['from']

    return jsonify([
        {
            "action": "talk",
            "text": """
            Prepare for uniform resource locator transmission. Transmission will repeat once. Begin transmission.
            Hotel. Tango. Tango. Papa. Colon. Slash. Slash.
            Tango. Romeo. Echo. Alpha. Sierra. Uniform. Romeo. Echo.
            Hotel. Uniform. November. Tango.
            Dot.
            Lima. Oscar. Charlie. Alpha. Lima.


            Repeat transmission.
            Hotel. Tango. Tango. Papa. Colon. Slash. Slash.
            Tango. Romeo. Echo. Alpha. Sierra. Uniform. Romeo. Echo.
            Hotel. Uniform. November. Tango.
            Dot.
            Lima. Oscar. Charlie. Alpha. Lima.

            End transmission. Goodbye.
            """
        }
    ])


app.run(port=4321, debug=True)
