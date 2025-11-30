# ILanerCalculateSerie.ReleaseValues

ILanerCalculateSerie.ReleaseValues
-


# ILanerCalculateSerie.ReleaseValues


## Синтаксис


ReleaseValues;


## Описание


Метод ReleaseValues устанавливает
 для точек ряда режим отображения, при котором в рабочей книге отображаются
 рассчитанные значения точек.


## Комментарии


Чтобы восстановить предыдущее состояние точек ряда нужно обновить ряд,
 используя метод [ILanerCalculateSerie.RefreshData](ILanerCalculateSerie.RefreshData.htm).


Режим отображения значений можно изменить используя свойство [ILanerCalculateSerie.DisplayDataAs](ILanerCalculateSerie.DisplayDataAs.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов, содержащая вычисляемые ряды данных. Также в рабочей книге включен
 режим подсветки ячеек, хранимые значения которых отличаются от рассчитанных.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


В рабочей книге выделите только вычисляемый один ряд и нажмите кнопку
 «Button1». Будет выполнена процедура:


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Serie: ILanerCalculateSerie;

	Begin

	    If LanerBox1.SelectedSeriesCount > 0 Then

	        Serie := LanerBox1.SelectedSeries(0) As ILanerCalculateSerie;

	        If Serie <> Null Then

	            Serie.ReleaseValues;

	        End If;

	    End If;

	End Sub Button1OnClick;


После выполнения примера для выделенного ряда будет сброшен признак,
 показывающий, что хранимые значения ряда отличаются от рассчитанных.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
