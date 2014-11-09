$(document).ready(function()
	{
		//function to prompt user for number
		var number = prompt("Please enter a number");

		var fizzBuzz = function(number) 
		{
		for (var i = 1; i <= number; i++)
			{
			if (i % 3 === 0)
				{
					$(".list").append('<li>fizz</li>');
				}

			else if (i % 5 === 0)
				{
					$(".list").append('<li>buzz</li>');
				}

			else if (i % 5 === 0 && i % 3 === 0)
				{
					$(".list").append('<li>fizz buzz</li>');
				}

			else
				{
					$(".list").append('<li>' + i + '</li>');
				}
			};
		};

		fizzBuzz(number);

	});

		/*prompt(number)
		{
			var number = +"number";
			return number;
			console.log(number);

			if (number % 1 != 0)
				{
					alert("if");
					fizzBuzz("number");
				}

			else 
				{
					alert("Please enter whole numbers only");
				}
		*/
		//Number rules
		/*var fizzBuzz = function(number) 
		{
		for (var i = number; i < 101; i++)
			{
			if (i % 3 === 0)
				{
					$(".list").append('<li>fizz</li>');
				}

			else if (i % 5 === 0)
				{
					$(".list").append('<li>buzz</li>');
				}

			else if (i % 5 === 0 && i % 3 === 0)
				{
					$(".list").append('<li>fizz buzz</li>');
				}

			else
				{
					$(".list").append('<li>' + i + '</li>');
				}
			};
		};*/