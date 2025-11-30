# ITabUnknownParameterException.SetParamName

ITabUnknownParameterException.SetParamName
-


# ITabUnknownParameterException.SetParamName


## Синтаксис


		SetParamName (Value: String);


## Параметры


Value. Наименование параметра.


## Описание


Метод SetParamName устанавливает
 наименование параметра функции в экземпляре ошибки, возникающей при записи
 в ячейку функции с неверным типом параметра.


## Комментарии


Если любую функцию с параметрами записать в ячейку таблицы с неверным
 типом параметра, то выводится соответствующие сообщения об ошибке:


	- Неизвестный идентификатор <наименование параметра>.


Данный метод позволяет изменить наименование параметра.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с подключенным модулем, идентификатор модуля SET_PARAM_NAME. Одна
 из ячеек отчета содержит текст, настроенный как гиперссылка. При нажатии
 на гиперссылку настроено действие «Выполнить
 процедуру/функцию». В качестве процедуры/функции указана Test.


Данный пример является модулем обработки события для регламентного отчета.


Добавьте ссылку на системную сборку Tab.


					Sub RaiseExceptionUnknownParam(Value: String);

		Var

		    Ex: ITabUnknownParameterException;

		Begin

		    Ex := New TabUnknownParameterException.CreateEx;

		    Ex.SetParamName(Value);

		    Raise Ex;

		End Sub RaiseExceptionUnknownParam;


		Public Function Test: Variant;

		Begin

		    RaiseExceptionUnknownParam("UnknownParameter");

		    Return "";

		End Function Test;


В результате выполнения примера в регламентном отчете будет всплывать
 сообщение с ошибкой, содержащее текст «Неизвестный идентификатор UnknownParameter».
 Таким образом, было назначено новое наименование параметра при появлении
 исключительной ситуации.


См. также:


[ITabUnknownParameterException](ITabUnknownParameterException.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
