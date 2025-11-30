# IScene3DSerie.Type

IScene3DSerie.Type
-


# IScene3DSerie.Type


## Синтаксис


Type: [Scene3DSerieType](../../Enums/Scene3DSerieType.htm);


## Описание


Свойство Type возвращает тип
 ряда сцены.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D
 и компонента IntegerEdit.


	Sub UserProc;

	Var

	    S : IScene3D;

	    series: IScene3DSeries;

	    serie : IScene3DSerie;

	Begin

	    series := S.Series;

	    serie := series.FindByKey(IntegerEdit1.Value);

	    IntegerEdit1.Value := serie.Type;

	End Sub UserProc;


После выполнения примера в редактор будет выведен индекс типа ряда,
 который был найден.


См. также:


[IScene3DSerie](IScene3DSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
