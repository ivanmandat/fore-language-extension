# MaskEdit.getEditorValue

MaskEdit.getEditorValue
-


# MaskEdit.getEditorValue


## Синтаксис


getEditorValue ();


## Описание


Метод getEditorValue возвращает
 значение редактора маски.


## Пример


Для выполнения примера подключите к html-странице ссылки на библиотеку
 PP.js и таблицы визуальных стилей PP.css. Создадим редактор маски, предназначенный
 для ввода времени. Добавим обработчик события Click:


<script type="text/javascript">


var MEtime = new PP.Ui.MaskEdit({


            ParentNode:
 document.getElementById("ME2"),


            Width:
 "170px",


            Height:
 "21px",


            Mask:
 "__:__",


            RegExpContent:
 "^(0\\d|1\\d|2[0-3]):([0-5]\\d)$"


        });


        MEtime.setValue("10:10");


        MEtime.Click.add(function(sender,
 args) {


            alert("Значение
 редактора: " + MEtime.getEditorValue());


        });


</script>


После выполнения примера на html-странице будет размещен редактор с
 маской для ввода времени с установленным значением. При нажатии на окно
 ввода редактора будет выдаваться сообщение со значением редактора.


Примечание.
 В отличие от метода [MaskEdit.getLastValidValue](MaskEdit.getLastValidValue.htm)
 метод getEditorValue возвращает
 любое значение редактора, в том числе и не соответствующее [регулярному
 выражению](MaskEdit.RegExpContent.htm).


См. также:


[MaskEdit](MaskEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
