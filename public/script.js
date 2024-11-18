document.getElementById("cocktailForm").addEventListener(
    "submit",
    async function (event) {
        event.preventDefault();

        const ingredients = document.getElementById("ingredients").value;
        const flavor = document.getElementById("flavor").value;
        const mood = document.getElementById("mood").value;

        try {
            const response = await fetch("/api/cocktail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ingredients, flavor, mood }),
            });

            const data = await response.json();

            if (data.error) {
                alert(data.error);
            } else {
                document.getElementById("cocktailRecipe").textContent =
                    data.recipe;
                document.getElementById("result").classList.remove("hidden");
            }
        } catch (error) {
            alert("Error generating the cocktail recipe.");
            console.error(error);
        }
    },
);