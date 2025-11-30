# IScene3DSeries.RemoveByIndex

IScene3DSeries.RemoveByIndex
-


# IScene3DSeries.RemoveByIndex


## Синтаксис


RemoveByIndex(Index: Integer): Boolean;


## Параметры


Index -
 индекс ряда.


## Описание


Метод RemoveByIndex удаляет
 ряд по заданному индексу. Метод возвращает True,
 в случае успешного удаления, в противном случае - False.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D
 и компонента IntegerEdit.


	Sub UserProc;

	Var

	    S : IScene3D;

	    series: IScene3DSeries;

	Begin

	    series := S.Series;

	    If series.RemoveByIndex(IntegerEdit1.Value) Then WinApplication.InformationBox("Объект удален");

	        Else WinApplication.InformationBox("Ошибка при удалении");

	    End If;

	End Sub UserProc;


После выполнения примера будет удален ряд сцены по заданному индексу.


См. также:


[IScene3DSeries](IScene3DSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
