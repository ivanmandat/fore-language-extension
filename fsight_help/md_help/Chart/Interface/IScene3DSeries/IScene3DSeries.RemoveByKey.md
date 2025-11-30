# IScene3DSeries.RemoveByKey

IScene3DSeries.RemoveByKey
-


# IScene3DSeries.RemoveByKey


## Синтаксис


RemoveByKey(Key: Integer): Boolean;


## Параметры


Key - ключ ряда.


## Описание


Метод RemoveByKey удаляет ряд
 по заданному ключу. Метод возвращает True,
 в случае успешного удаления, в противном случае - False.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D
 и компонента IntegerEdit.


	Sub UserProc;

	Var

	    S : IScene3D;

	    series: IScene3DSeries;

	    serie: IScene3DSerie;

	    key: integer;

	Begin

	    series := S.Series;

	    serie := series.Item(IntegerEdit1.Value);

	    key := serie.Key;

	    If series.RemoveByKey(key) Then WinApplication.InformationBox("Объект удален");

	        Else WinApplication.InformationBox("Ошибка при удалении");

	    End If;

	End Sub UserProc;


После выполнения примера будет удален ряд по заданному ключу.


См. также:


[IScene3DSeries](IScene3DSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
