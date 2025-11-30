# IScene3DSeries.IndexByKey

IScene3DSeries.IndexByKey
-


# IScene3DSeries.IndexByKey


## Синтаксис


IndexByKey(Key: Integer): Integer;


## Параметры


Key - ключ ряда сцены.


## Описание


Метод IndexByKey возвращает
 индекс ряда сцены по заданному ключу. Если ряд сцены не был найден, то
 свойство возвращает «-1».


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


После выполнения примера в редактор будет выведен индекс созданого ряда.


См. также:


[IScene3DSeries](IScene3DSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
