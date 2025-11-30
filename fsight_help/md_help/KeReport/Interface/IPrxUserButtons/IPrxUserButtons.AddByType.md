# IPrxUserButtons.AddByType

IPrxUserButtons.AddByType
-


# IPrxUserButtons.AddByType


## Синтаксис


AddByType([Type: [PrxUserButtonType](../../Enums/PrxUserButtonType.htm)
 = 0]): [IPrxUserButtonAction](../IPrxUserButtonAction/IPrxUserButtonAction.htm);


## Параметры


Type. Тип создаваемой пользовательской
 кнопки.


## Описание


Метод AddByType создаёт пользовательскую
 кнопку с заданным типом.


## Пример


Для выполнения примера в репозитории предполагается наличие регламентного
 отчёта с идентификатором REPORT и модуля с идентификатором MOD_ACTION.
 Модуль содержит следующий код:


[![](../../Opened.gif)![](../../Closed.gif)Пример кода](javascript:TextPopup(this))


		Public Sub Run(Report: IPrxReport);

		Begin

		    //...

		End Sub Run;


		Public Function BeforeRun(Report: IPrxReport; Var messageType: Integer): String;

		Begin

		    //...

		    Return ""

		End Function BeforeRun;


		Public Sub AfterRun(Report: IPrxReport);

		Begin

		    //...

		End Sub AfterRun;


		Public Function GetEnable(Report: IPrxReport): Boolean;

		Begin

		    //...

		    Return True;

		End Function GetEnable;


В файловой системе предполагается наличие картинки для кнопки D:\Work\Image\btn16x16.png.


Добавьте ссылки на системные сборки: IO, Metabase, Report.


	Sub AddUserButton;

	Var

	    Mb: IMetabase;

	    Report: IPrxReport;

	    UserBtn: IPrxUserButton;

	Begin

	    Mb := MetabaseClass.Active;

	    Report := Mb.ItemById("REPORT").Edit As IPrxReport;

	    // Создание новой пользовательской кнопки

	    UserBtn := Report.UserButtons.AddByType(PrxUserButtonType.Method);

	    // Настройка пользовательской кнопки

	    UserBtn.ForeModule := Mb.ItemById("MOD_ACTION");

	    UserBtn.Icon := New FileStream.Create("D:\Work\Image\btn16x16.png", FileOpenMode.Read, FileShare.DenyNone);

	    UserBtn.IconType := "png";

	    UserBtn.SmallIcon := False;

	    // Настройка действий

	    (UserBtn.Action As IPrxUserButtonActionForeMethod).ForeMethod := "Run";

	    UserBtn.BeforeAction.ForeMethod := "BeforeRun";

	    UserBtn.AfterAction.ForeMethod := "AfterRun";

	    UserBtn.UpdateEnable.ForeMethod := "GetEnable";

	    // Сохранение изменений

	    (Report As IMetabaseObject).Save;

	End Sub AddUserButton;


При выполнении примера в регламентном отчёте будет создана пользовательская
 кнопка. Для кнопки будет сгенерировано описание, заданы изображение и
 обработчики всех действий. В качестве обработчиков выступают Fore-методы.


См. также:


[IPrxUserButtons](IPrxUserButtons.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
