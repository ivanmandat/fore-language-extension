# IDebug.Indent

IDebug.Indent
-


# IDebug.Indent


## Синтаксис


		Indent;


## Описание


Метод Indent осуществляет установку
 отступа в консоли на следующий уровень.


## Пример


					Sub UserProc;

		Begin

		    Debug.IndentLevel := 3;

		    Debug.IndentSize := 2;

		    Debug.WriteLine("Текущий уровень отступа: " + Debug.IndentLevel.ToString);

		    Debug.WriteLine("Размер одного отступа: " + Debug.IndentSize.ToString + " пробела(ов)");

		    Debug.Indent;

		    Debug.WriteLine("Текущий уровень отступа: " + Debug.IndentLevel.ToString);

		    Debug.Indent;

		    Debug.WriteLine("Текущий уровень отступа: " + Debug.IndentLevel.ToString);

		    Debug.Unindent;

		    Debug.WriteLine("Возврат на уровень: " + Debug.IndentLevel.ToString);

		    Debug.Unindent;

		    Debug.WriteLine("Возврат на уровень: " + Debug.IndentLevel.ToString);

		End Sub UserProc;


В результате выполнения примера данные будут выведены в следующем виде:


Выполнение модуля начато


      Текущий уровень отступа: 3


      Размер одного отступа: 2 пробела(ов)


        Текущий уровень отступа: 4


          Текущий уровень отступа: 5


        Возврат на уровень: 4


      Возврат на уровень: 3


Выполнение модуля завершено


См. также:


[IDebug](IDebug.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
