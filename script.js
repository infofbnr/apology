function generateApology() {
    let name = document.getElementById("name").value;
    let friend = document.getElementById("friend").value;
    let reason = document.getElementById("reason").value;
    let excuse = document.getElementById("excuse").value;
    let guilt = document.getElementById("guilt").value;
    let makeup = document.getElementById("makeup").value;

    if (!name || !friend || !makeup) {
        alert("Please fill in all required fields.");
        return;
    }

    guilt = Math.max(1, Math.min(10, guilt));

    let apologyTemplates = [
        `
        Dear ${friend},

        I am writing to express my deepest regret for ${reason}. It was truly unacceptable, and I acknowledge the emotional turmoil I have caused.

        In my defense, ${excuse}, though I recognize it does not excuse my behavior. My guilt level stands at ${guilt}/10, and I promise to reflect on my actions deeply.

        To make up for this, I will ${makeup}.

        Sincerely,
        ${name}
        `,
        `
        Dear ${friend},

        I want to sincerely apologize for ${reason}. I know that my actions have hurt you. While ${excuse} might explain my state of mind, it in no way justifies what I did. I rate my remorse at ${guilt}/10 and am committed to learning from my mistakes.

        I will do my best to make it right by ${makeup}.

        With sincere regret,
        ${name}
        `,
        `
        Dear ${friend},

        I deeply regret ${reason} and the distress it has caused. Although I mentioned ${excuse} in my defense, I understand it doesn't excuse my actions. My remorse is at ${guilt}/10, and I am determined to improve.

        As a step towards making amends, I will ${makeup}.

        Yours truly,
        ${name}
        `
    ];

    let randomIndex = Math.floor(Math.random() * apologyTemplates.length);
    let apologyText = apologyTemplates[randomIndex];

    document.getElementById("apologyText").innerText = apologyText.trim();
    document.getElementById("apologyOutput").style.display = "block";

    document.getElementById("guilt").value = guilt;
}


function copyApology() {
    let text = document.getElementById("apologyText").innerText;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Apology copied to clipboard!");
        })
        .catch((error) => {
            alert("Failed to copy apology: " + error);
        });
}

  