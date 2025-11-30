# IDataGridBandBase.CanSetVisible

IDataGridBandBase.CanSetVisible
-


# IDataGridBandBase.CanSetVisible


## Синтаксис


CanSetVisible: Boolean;


## Описание


Свойство CanSetVisible определяет
 возможность изменить видимость контейнера/колонки компонента.


## Комментарии


Структура таблицы основана на трех фиксированных контейнерах со следующими
 заголовками: CenterBand, RightFixedBand и LeftFixedBand.
 Данные контейнеры существуют всегда, располагаются в центральной, правой
 и левой частях таблицы соответственно. Изменять видимость данных контейнеров
 нельзя.


Для пользовательских контейнеров и колонок можно изменять видимость.
 Данное свойство предназначено для ограничения данной возможности. Для
 изменения видимости используйте свойство [Visible](IDataGridBandBase.Visible.htm).


См. также:


[IDataGridBandBase](IDataGridBandBase.htm)
 | [IDataGridBandBase.Visible](IDataGridBandBase.Visible.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
