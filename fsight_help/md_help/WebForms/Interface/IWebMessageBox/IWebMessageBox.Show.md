# IWebMessageBox.Show

IWebMessageBox.Show
-


# IWebMessageBox.Show


## Синтаксис


Show(Text: String; Caption: String; Buttons: [WebMessageBoxButtons](../../Enums/WebMessageBoxButtons.htm);
 Icon: [WebMessageBoxIcon](../../Enums/WebMessageBoxIcon.htm)):
 [WebDialogResult](../../Enums/WebDialogResult.htm);


## Параметры


Text. Текст, отображаемый в
 диалоге;


Caption. Заголовок диалога;


Buttons. Набор кнопок, который
 будет доступен пользователю;


Icon. Тип пиктограммы, отображаемый
 в диалоге.


## Описание


Метод Show инициализирует диалог
 в соответствии с заданными параметрами и возвращает результат действий
 пользователя.


## Комментарии


Метод инициализирует диалоги различного назначения и содержания в соответствии
 с заданными параметрами.


## Пример


Указанная функция демонстрирует вызов различных диалогов в зависимости
 от значения, передаваемого во входном параметре. Результатом функции будет
 результат закрытия диалога.


	Function CheckValue(Value: Integer): WebDialogResult;

	Var

	    Result: WebDialogResult;

	Begin

	    If Value <= 20 Then

	        Result := WebMessageBox.Show("Значение в пределах нормы", "Информация", WebMessageBoxButtons.Ok, WebMessageBoxIcon.Information);

	    Elseif (Value > 20) and (Value <= 60) Then

	        Result := WebMessageBox.Show("Значение незначительно превышает норму. Продолжить?", "Оповещение",

	            WebMessageBoxButtons.YesNo, WebMessageBoxIcon.Question);

	    Elseif (Value > 60) and (Value <= 100) Then

	        Result := WebMessageBox.Show("Значение значительно превышает норму. Продолжение может нарушить функционирование системы!", "Предупреждение",

	            WebMessageBoxButtons.YesNoCancel, WebMessageBoxIcon.Warning);

	    Else

	        Result := WebMessageBox.Show("Критическое значение. Процесс будет остановлен", "Ошибка", WebMessageBoxButtons.Ok, WebMessageBoxIcon.Error);

	    End If;

	    Return Result;

	End function CheckValue;


См. также:


[IWebMessageBox](IWebMessageBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
