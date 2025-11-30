# ITabFont.Assign

ITabFont.Assign
-


# ITabFont.Assign


## Синтаксис


Assign(Value: [ITabFont](ITabFont.htm));


## Параметры


Value — шрифт,
 параметры которого необходимо установить текущему шрифту.


## Описание


Метод Assign заполняет параметры
 текущего шрифта параметрами другого шрифта, указанного в качестве входного
 параметра Value.


## Комментарии


При вызове данного метода, для текущего шрифта будут установлены все
 параметры, которые определены для исходного шрифта, передаваемого в параметре
 Value. Параметры, определенные
 для текущего шрифта и неопределенные в исходном, будут сброшены.


## Пример


			Sub UserProc;

Var

    Style1, Style2, Style3, Style4: ITabCellStyle;

    Font2, Font4: ITabFont;

Begin

    Style1 := New TabCellStyle.Create;

    Style2 := New TabCellStyle.Create;

    Style3 := New TabCellStyle.Create;

    Style4 := New TabCellStyle.Create;

    //Определение параметров шрифта

    Style1.Font.Bold := TriState.OnOption;

    Style2.Font.Italic := TriState.OnOption;

    //Параметры шрифта второго стиля

    Style3.Font.Bold := TriState.OnOption;

    Style4.Font.Italic := TriState.OnOption;

    //Применение стилей шрифтов

    Font2 := Style2.Font;

    Font4 := Style4.Font;

    Font2.Apply(Style1.Font);

    Font4.Assign(Style3.Font);

    //Проверка установленных параметров

    Debug.WriteLine(Font2.Bold);

    Debug.WriteLine(Font2.Italic);

    Debug.WriteLine(Font4.Bold);

    Debug.WriteLine(Font4.Italic);

End Sub UserProc;


При выполнении примера будут созданы четыре стиля. Для одного из параметров
 шрифтов будут установлено включенное состояние. Параметры шрифта стиля
 «Style1» будут применены для стиля «Style2», а стиля «Style3» для стиля
 «Style4». При использовании метода Apply, так как в стиле «Style2» определен
 параметр Italic, то он не будет сброшен при применении стиля «Style1».
 При использовании метода Assign, так как в стиле «Style3» неопределен
 параметр Italic, то значение этого параметра будет сброшено в стиле
 «Style4».


После выполнения примера в консоль среды разработки будут выведены следующие
 результаты проверки значений свойств:


-1


-1


-1


-2


См. также:


[ITabFont](ITabFont.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
