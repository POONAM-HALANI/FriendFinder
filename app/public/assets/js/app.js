var questions = ["Your mind is always buzzing with unexplored ideas and plans?",
    "Generally speaking, you rely more on your experience than your imagination?",
    "You find it easy to stay relaxed and focused even when there is some pressure?",
    "You rarely do something just out of sheer curiosity?",
    "People can rarely upset you?",
    "It is often difficult for you to relate to other people’s feelings?",
    "In a discussion, truth should be more important than people’s sensitivities?",
    "You rarely get carried away by fantasies and ideas?",
    "You think that everyone’s views should be respected regardless of whether they are supported by facts or not?",
    "You feel more energetic after spending time with a group of people?"
];

var options = [{ Text: "Select an option", Value: "" },
    { Text: "1 (Strongly Disagree)", Value: "1" },
    { Text: "2", Value: "2" },
    { Text: "3", Value: "3" },
    { Text: "4", Value: "4" },
    { Text: "5 (Agree)", Value: "5" }
];

var Friend = function(name, photo) {
    this.name = name;
    this.photo = photo;
    this.scores = []; 
}

$(document).ready(function() {

    let optionsHtml = "";

    for (let option of options) {
        optionsHtml += `<option value="${option.Value}">${option.Text}</option>`;
    }

    for (let i = 0; i < questions.length; i++) {

        const questionNo = i + 1;

        let html = `<span class="lead font-weight-bold">Question ${questionNo}</span>
        <div class="form-group pb-2">
            <label for="q${questionNo}-input">${questions[i]}</label>
            <select class="form-control answer" id="q${questionNo}-input" required>
                    ${optionsHtml}
            </select>
            <div class="invalid-feedback">
                Required
            </div>
        </div>`;

        $("#questions").append(html);

    }

    $("#submit-btn").on("click", function(event) {
        event.preventDefault();

        let form = $(".needs-validation")[0];

        if (form.checkValidity() === false) {
            form.classList.add("was-validated");
            return;
        }

        let name = $("#name-input").val().trim();
        let photo = $("#photo-input").val().trim();

        let newFriend = new Friend(name, photo);

        $(".answer").each(function(index) {
            newFriend.scores.push($(this).val());
        });

        $.post("/api/friend", newFriend)
            .then(function(match) {
                if (match) {
                    $("#match-name").text(match.name);
                    $("#match-photo").attr("src", match.photo);
                    $("#bestMatch").modal();
                }
            });
    });

});