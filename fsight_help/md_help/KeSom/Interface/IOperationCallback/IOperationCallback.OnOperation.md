# IOperationCallback.OnOperation

IOperationCallback.OnOperation
-


# IOperationCallback.OnOperation


## Синтаксис


OnOperation(Operation: Integer; O1: Variant; O2:
 Variant: Var State: Integer);


## Параметры


Operation. Тип операции. Данный
 параметр не используется.


O1. Объект, содержащий фильтр
 протокола доступа.


O2. Объект, содержащий фильтр
 протокола доступа.


State. Результат разрешения
 конфликта. Определяется перечислением [CallbackOperationState](../../Enums/CallbackOperationState.htm).


## Описание


Метод OnOperation выполняет
 действия, необходимые для разрешения конфликта.


## Пример


Для выполнения примера предполагается наличие файла «C:\Filter.xml»,
 содержащего более одного фильтра протокола доступа.


	Class MyOperationCallback: OperationCallback

	    Parent: IWin32Window;


	    Public Sub OnOperation(Operation: Integer; O1: Variant; O2: Variant; Var State: Integer);

	    Var

	        YesPress: Boolean;

	    Begin

	        YesPress := False;

	        If WinApplication.YesNoCancelBox("Заменить наименование '" + (O1 As IAuditFilterObject).Name

	            + "' на '" + (O2 As IAuditFilterObject).Name + "'?", YesPress) Then

	                State := YesPress ? CallbackOperationState.Replace : CallbackOperationState.Skip;

	        Else

	            State := CallbackOperationState.Stop;

	        End If;

	    End Sub OnOperation;

	End Class MyOperationCallback;


	Sub UserProc;

	Var

	    FilCon, FilConDef: IAuditFiltersContainer;

	    FilObj, FilObjDef: IAuditFilterObject;

	    State: Integer;

	Begin

	    FilCon := New AuditFiltersContainer.Create;

	    FilCon.LoadFromFile("C:\Filter.xml");

	    FilCon.Callback := New MyOperationCallback.Create;

	    FilConDef := New AuditFiltersContainer.Create;

	    FilConDef.Load;

	    FilCon.Callback.OnOperation(0, FilCon.Filters.Item(1), FilConDef.Filters.Item(0), State);

	    If State = CallbackOperationState.Replace Then

	        FilObj := FilCon.Filters.Item(1).Edit;

	        FilObjDef := FilConDef.Filters.Item(0);

	        FilObj.Name := FilObjDef.Name;

	        FilObj.Save;

	        FilCon.SaveToFile("C:\NameRepl.xml");

	    End If;

	End Sub UserProc;


При выполнении примера, будет сгенерирован конфликт при загрузке файла.
 Пользователю будет предложено решение конфликта.


См. также:


[IOperationCallback](IOperationCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
