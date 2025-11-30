# NumberEdit.Validate

NumberEdit.Validate
-


# NumberEdit.Validate


## Синтаксис


Validate: function(sender,args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Validate наступает во время проверки корректности введённых данных.


## Комментарии


Аргументы события Validate реализованы классом [NumberEditValidateArgs](../NumberEditValidateArgs/NumberEditValidateArgs.htm).


## Пример


Для выполнения примера подключите к html-странице ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Создадим чиловой редактор с наименованием «NE». Добавим функцию OnValidate, которая является обработчиком события Validate:


<script type="text/javascript">


    NE = new PP.Ui.NumberEdit({


            ParentNode: document.getElementById("NE1"),


            Width: "170px",


            Height: "21px",


            Validate: OnValidate//Добавляем обработчик события


        });


function OnValidate(sender, args) {//Создаем функцию, являющуюся обработчиком события Validate


            var i = args.Value;


            if (i > 1000 || i < -1000)


            {


                args.IsValid = false;


                alert("Проверка не пройдена");


            }


        }


</script>


После выполнения примера при вводе в числовой редактор значения больше 1000 или меньше -1000 будет выдаваться сообщение «Проверка не пройдена».


См. также:


[NumberEdit](NumberEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
