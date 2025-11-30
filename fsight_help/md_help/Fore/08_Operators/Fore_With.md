# Оператор With

Оператор With
-


# Оператор With


Оператор With позволяет избегать
 использования сложных квалифицированных идентификаторов при доступе к
 полям, свойствам и методам объектов. С помощью оператора With
 задаются синонимы квалифицированных идентификаторов, действующие в блоке,
 ограничиваемом данным оператором.


## Пример


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    With lbl: Label1.Font Do

	        lbl.Bold := True;

	        lbl.Color := GxColor.FromName("Red");

	        lbl.Size := 15;

	        lbl.Underline := True;

	    End With;

	End Sub Button1OnClick;


См. также:


[Руководство
 по языку Fore](../Fore_Title.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
