# IUiCommandExecutionContext.ExecutionMode

IUiCommandExecutionContext.ExecutionMode
-


# IUiCommandExecutionContext.ExecutionMode


## Синтаксис


ExecutionMode: [UiCommandExecutionMode](../../Enums/UiCommandExecutionMode.htm);


## Описание


Свойство ExecutionMode определяет
 режим выполнения команды.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и объекта репозитория с идентификатором
 Query, поддерживающего команду открытия. Данный объект содержит один дополнительный
 параметр.


Добавьте ссылки на системные сборки: Forms, Metabase, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        Mb: IMetabase;

	        ObjDes: IMetabaseObjectDescriptor;

	        Target: IUiCommandTarget;

	        Context: IUiCommandExecutionContext;

	        Params: IMetabaseObjectParamValues;

	        Param: IMetabaseObjectParamValue;

	        i: Integer;

	    Begin

	        MB := MetabaseClass.Active;

	        ObjDes := MB.ItemById("Query");

	        Target := WinApplication.Instance.GetObjectTarget(ObjDes);

	        Context := Target.CreateExecutionContext;

	        Context.ExecutionMode := UiCommandExecutionMode.PromptUser;

	        Context.Silent := True;

	        Params := Target.Execute("Object.Open", Context) As IMetabaseObjectParamValues;

	        If Params <> Null Then

	            For i := 0 To Params.Count - 1 Do

	                Param := Params.Item(i);

	                Debug.WriteLine("Параметр: " + Param.Name + "; Значение:" + Param.Value);

	            End For;

	        Else

	            Debug.WriteLine("Установка значений параметров отменена");

	        End If;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет инициализирован
 диалог установки значений параметров, используемый при открытии объекта.
 Открытие объекта не производится. После нажатия на кнопку "ОК"
 диалога, список параметров и их значения будут выведены в консоль среды
 разработки.


См. также:


[IUiCommandExecutionContext](IUiCommandExecutionContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
