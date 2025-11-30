# TermEdit.getCursorOffset

TermEdit.getCursorOffset
-


# TermEdit.getCursorOffset


## Синтаксис


getCursorOffset();


## Описание


Метод getCursorOffset возвращает
 положение курсора относительно левого верхнего угла компонента.


## Пример


Для выполнения примера [создайте
 компонент TermEdit](../../../Components/TermEdit/Example_TermEdit.htm) с наименованием «termEdit».


В теге BODY добавим кнопку с наименованием «get selected term», при
 нажатии на которую выполняется функция getPosition() и строку, куда будет
 выведен результат выполнения данной функции:


<!--Кнопка-->


<input type="button" value="get
 cursor position" onclick="getPosition();" style="vertical-align:
 top;" />


<!--Строка-->


<span id="getterCaret"></span>


В javascript-код добавим функцию:


function getPosition() {


    var pos = termEdit.getCursorOffset();


    var pos1 = termEdit.getCursorPosition();


    if (pos != null) {


        document.getElementById("getterCaret").innerHTML
 = "X: " + pos.X + " Y: " + pos.Y + " Строка:
 " + pos1.rowIndex + " Столбец: " + pos1.columnIndex


    }


}


После выполнения примера при нажатии на кнопку «get cursor position»
 на странице будет выведен текст с информацией о текущей позиции курсора
 относительно левого верхнего угла компонента (координаты X и Y) и индексы
 столбца и строки в которых расположен курсор.


См. также:


[TermEdit](TermEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
