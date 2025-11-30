# ITabRequiredParametersException.SetFuncName

ITabRequiredParametersException.SetFuncName
-


# ITabRequiredParametersException.SetFuncName


## Синтаксис


SetFuncName(Value: String);


## Параметры


Value. Наименование функции.


## Описание


Метод SetFuncName устанавливает
 наименование функции в экземпляре ошибки, возникающей при записи в ячейку
 таблицы функции без параметров и скобок.


## Комментарии


Если любую функцию с аргументами записать в ячейку таблицы без скобок
 и аргументов (), то выводятся соответствующие сообщения об ошибке:


	- Для вызова функции <наименование функции> требуется хотя
	 бы один параметр;


	- Определены не все обязательные параметры функции <наименование
	 функции>.


Данный метод позволяет изменить наименование функции.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с подключенным модулем, идентификатор модуля «SET_FUNC_NAME». Одна
 из ячеек отчета содержит текст, настроенный как гиперссылка. При нажатии
 на гиперссылку настроено действие «Выполнить
 процедуру/функцию». В качестве процедуры/функции укажите «Test».


Подключите системную сборку Tab.


			Sub RaiseExceptionRequiredParams(Value: String);

Var

    Ex: ITabRequiredParametersException;

Begin

    Ex := New TabRequiredParametersException.CreateEx;

    Ex.SetFuncName(Value);

    Raise Ex;

End Sub RaiseExceptionRequiredParams;


Public Function Test: Variant;

Begin

    RaiseExceptionRequiredParams("NewFunction");

    Return "";

End Function Test;


Данный пример является макросом для регламентного отчета. При выполнении
 макроса в регламентном отчете будет всплывать сообщение с ошибкой, содержащее
 текст «Для вызова функции NewFunction требуется хотя бы один параметр».
 Таким образом, было назначено новое наименование функции при появлении
 исключительной ситуации.


См. также:


[ITabRequiredParametersException](ITabRequiredParametersException.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
