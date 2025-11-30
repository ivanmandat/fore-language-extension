# IScene3D.Series

IScene3D.Series
-


# IScene3D.Series


## Синтаксис


Series: [IScene3DSeries](../IScene3DSeries/IScene3DSeries.htm);


## Описание


Свойство Series определяет параметры
 универсальной коллекции рядов сцены.


Примечание.
 В универсальную коллекцию рядов сцены входят все объекты сцены (сферы,
 поверхности обычные и замкнутые, группа именованных сфер), но на данный
 момент свойство следует использовать только для чтения свойств объектов.
 При необходимости их редактирования следует использовать специализированные
 коллекции (интерфейсы).


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


[IScene3D](IScene3D.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
