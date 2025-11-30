# IScene3DSeries.Add

IScene3DSeries.Add
-


# IScene3DSeries.Add


## Синтаксис


Add(Type: [Scene3DSerieType](../../Enums/Scene3DSerieType.htm)):
 [IScene3DSerie](../IScene3DSerie/IScene3DSerie.htm);


## Параметры


Type - тип добавляемого ряда.


## Описание


Метод Add добавляет ряд в коллекцию.


Примечание.
 Ряд типа Points в коллекцию можно
 добавить только один раз.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D
 и компонента ComboBox.


	Sub UserProc;

	Var

	    S : IScene3D;

	    series: IScene3DSeries;

	    serie : IScene3DSerie;

	Begin

	    series := S.Series;

	    serie := series.Add(ComboBox1.ItemIndex As Scene3DSerieType);

	End Sub UserProc;


После выполнения примера в коллекцию будет добавлен ряд выбранного типа.


См. также:


[IScene3DSeries](IScene3DSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
