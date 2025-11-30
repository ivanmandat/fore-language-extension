# IMsFormulaTermInfo.TermScreenedText

IMsFormulaTermInfo.TermScreenedText
-


# IMsFormulaTermInfo.TermScreenedText


## Синтаксис


		TermScreenedText: String;


## Описание


Свойство TermScreenedText возвращает
 наименование терма с символами экранирования.


## Комментарии


Для экранирования символов применяется символ «\». Если в строке находится
 символ «\», то символ, следующий за ним, распознаётся как строка.


## Пример


Для выполнения примера предполагается наличие терма «Info», передаваемого
 в качестве входного параметра функции.


Добавьте ссылку на системную сборку Ms.


					Sub UserProc(Info: IMsFormulaTermInfo);

		Begin

		    Debug.WriteLine("Наименование терма без символов экранирования: " + Info.TermText);

		    Debug.WriteLine("Наименование терма с символами экранирования: " + Info.TermScreenedText);

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено наименование
 терма в различных форматах. Например:


Наименование терма без символов экранирования:
 {FC_COMM_26!Af{ghanistan[t]}


Наименование терма с символами экранирования:
 {FC_COMM_26!Af\{ghanistan[t]}


См. также:


[IMsFormulaTermInfo](IMsFormulaTermInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
