# IScene3DSerie.Key

IScene3DSerie.Key
-


# IScene3DSerie.Key


## Синтаксис


Key: Integer;


## Описание


Свойство Key возвращает ключ
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

	    serie := series.Add(Scene3DSerieType.Points);

	    idx := series.IndexByKey(serie.key);

	    IntegerEdit1.Value := idx;

	End Sub UserProc;


После выполнения примера в редактор будет выведен индекс созданного
 ряда.


См. также:


[IScene3DSerie](IScene3DSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
