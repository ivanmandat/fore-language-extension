# IPrxControl.Recreate

IPrxControl.Recreate
-


# IPrxControl.Recreate


## Синтаксис


Recreate;


## Описание


Метод Recreate осуществляет
 пересоздание элемента управления.


## Пример


			Sub ControlRecreate;

Var

    Rep: IPrxReport;

    Ctrl: IPrxControl;

    sBind: String;

Begin

    Rep := PrxReport.ActiveReport;

    Ctrl := Rep.Controls.FindById("Item");

    sBind := Ctrl.Binding;

    If sBind.IndexOf("10") >= 0 Then

        sBind := "UI=""ComboBox"" SEPARATORS="";"" ITEMS=""1;2""";

    Else

        sBind := "UI=""ComboBox"" SEPARATORS="";"" ITEMS=""10;20""";

    End If;

    Ctrl.Binding := sBind;

    Ctrl.Recreate;

End Sub ControlRecreate;


Данный пример является макросом для регламентного отчета. При выполнения
 макроса будет пересоздаваться элемент управления с идентификатором "Item".


См. также:


[IPrxControl](IPrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
