# IWebForm.ShowModal

IWebForm.ShowModal
-


# IWebForm.ShowModal


## Синтаксис


ShowModal: [WebFormResult](ForeSys.chm::/Enums/WebFormResult.htm);


## Описание


Метод ShowModal открывает веб-форму
 модально относительно того объекта, из которого выполняется код.


## Комментарии


Использование данного метода доступно только в веб-приложении. Веб-форма,
 для которой вызывается метод, должна быть открыта с помощью метода [IMetabaseObjectDescriptor.Open](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Open.htm)
 или [IMetabaseObjectDescriptor.OpenWithParam](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.OpenWithParam.htm).


Результатом выполнения метода ShowModal
 является результат закрытия модальной веб-формы, который может быть передан
 в методе [IWebFormComponent.Close](WebForms.chm::/Interface/IWebFormComponent/IWebFormComponent.Close.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие двух веб-форм
 с идентификаторами SOURCEF и DESTINATIONF. На первой форме расположена
 кнопка. На второй форме расположены два компонента Input, кнопка, создан
 обработчик для события OnCommand.


Добавьте ссылки на системные сборки: Metabase, WebForm.


Код первой формы:


	Class SOURCEFWebForm: WebForm

	    Button1: WebButton;


	    Sub Button1OnClick;

	    Var

	        Mb: IMetabase;

	        wForm: IWebForm;

	        Result: Variant;

	        fCloseRes: WebFormResult;

	    Begin

	        Mb := MetabaseClass.Active;

	        wForm := Mb.ItemById("DESTINATIONF").Open(null) As IWebForm;

	        Result := wForm.SendCommand("command1", 100);

	        fCloseRes := wForm.ShowModal;

	        Self.Text := Result + ' ' + fCloseRes.ToString;

	    End Sub Button1OnClick;

	End Class SOURCEFWebForm;


Код второй формы:


	Class DESTINATIONFWebForm: WebForm

	    Button1: WebButton;

	    Input1: WebInput;

	    Input2: WebInput;


	    Sub DESTINATIONFWebFormOnCommand(Args: IWebCommandEventArgs);

	    Begin

	        Input1.Text := Args.Command;

	        Input2.Text := Args.Argument;

	        If Args.Command = "command1" Then

	            Args.Result := "1";

	        Elseif args.Command = "command2" Then

	            Args.Result := "2";

	        Else

	            Args.Result := "0";

	        End If;

	    End Sub DESTINATIONFWebFormOnCommand;

	    Sub Button1OnClick;

	    Begin

	        If Integer.Parse(Input2.Text) < 100 Then

	            Self.Close(WebFormResult.Yes);

	        Else

	            Self.Close(WebFormResult.No);

	        End If;

	    End Sub Button1OnClick;

	End Class DESTINATIONFWebForm;


При запуске первой веб-формы и нажатии на кнопку будет инициализирована
 вторая веб-форма. Для веб-формы будет отправлена команда, после этого
 веб-форма будет открыта модально относительно первой веб-формы. При закрытии
 второй веб-формы будет возвращён результат обработки команды и результат
 закрытия. Полученные результаты будут отображёны в заголовке первой веб-формы.


См. также:


[IWebForm](IWebForm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
