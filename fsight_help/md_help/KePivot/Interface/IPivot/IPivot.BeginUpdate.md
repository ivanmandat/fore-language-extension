# IPivot.BeginUpdate

IPivot.BeginUpdate
-


# IPivot.BeginUpdate


## Синтаксис


BeginUpdate;


## Описание


Метод BeginUpdate отключает
 любую перерисовку таблицы.


## Комментарии


Метод используется при изменении большого количества данных либо параметров
 таблицы для исключения мерцания визуальных компонентов, отображающих данные
 таблицы. Возобновление перерисовки осуществляется методом [IPivot.EndUpdate](IPivot.EndUpdate.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для TabSheetBox.


Пример является обработчиком события OnClick
 для компонента Button.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    OLAP: IEaxAnalyzer;

    Pivot: IPivot;

Begin

    OLAP := UiErAnalyzer1.ErAnalyzer;

    Pivot := OLAP.Pivot;

    Pivot.BeginUpdate;

    //...

    //Изменение параметров таблицы

    //...

    Pivot.EndUpdate;

End Sub Button1OnClick;


При нажатии на кнопку для ускорения процесса обновления таблицы с данными будет отключена перерисовка таблицы.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
