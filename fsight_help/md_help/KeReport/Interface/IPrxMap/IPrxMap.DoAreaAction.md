# IPrxMap.DoAreaAction

IPrxMap.DoAreaAction
-


# IPrxMap.DoAreaAction


## Синтаксис


DoAreaAction(Argument: Variant);


## Параметры


Argument - идентификатор территории.


## Описание


Метод DoAreaAction генерирует
 событие щелчка кнопки мыши на территории карты. Модуль для обработки событий
 устанавливается с помощью свойства [IPrxMap.AreaAction](IPrxMap.AreaAction.htm).


## Пример


В рассматриваемом примере предполагается существование объекта Report
 типа IPrxReport.


			Sub UserProc;

Var

    Report: IPrxReport;

    Sheet: IPrxSheet;

    Tab: ITabSheet;

    Map: IPrxMap;

Begin

    Sheet := Report.ActiveSheet;

    Tab := (Sheet As IPrxTable).TabSheet;

    Map := Tab.Objects.Item(0).Extension As IPrxMap;

    Map.DoAreaAction(26);

End Sub UserProc;


После выполнения примера будет сгенерировано событие для территории
 карты с идентификатором «26».


См. также:


[IPrxMap](IPrxMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
