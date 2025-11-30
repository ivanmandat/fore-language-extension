# TermEdit.getCurrentTermText

TermEdit.getCurrentTermText
-


# TermEdit.getCurrentTermText


## Синтаксис


getCurrentTermText();


## Описание


Метод getCurrentTermText возвращает
 текст терма, в котором в данный момент установлен курсор.


## Комментарии


Метод getCurrentTermText не
 возвращает текст терма, для свойства Term.IsLiteral которого установлено
 значение false.


## Пример


Для выполнения примера [создайте
 компонент TermEdit](../../../Components/TermEdit/Example_TermEdit.htm) с наименованием «termEdit».


В теге BODY добавим кнопку с наименованием «get selected term», при
 нажатии на которую выполняется функция getSelectedTerm() и строку, куда
 будет выведен результат выполнения данной функции:


<!--Кнопка-->


<input type="button" value="get
 selected term" onclick="getSelectedTerm();" style="vertical-align:
 top;" />


<!--Строка-->


<span id="selectedTerm"></span>


В javascript-код добавим функцию:


function getSelectedTerm() {


    document.getElementById("selectedTerm").innerHTML
 = termEdit.getCurrentTermText();


}


После выполнения примера при нажатии на кнопку «get selected term» на
 странице будет выведен текст терма, в котором в данный момент установлен
 курсор.


См. также:


[TermEdit](TermEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
