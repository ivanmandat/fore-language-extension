# IPivot.EndUpdate

IPivot.EndUpdate
-


# IPivot.EndUpdate


## Синтаксис


EndUpdate;


## Описание


Метод EndUpdate возобновляет
 перерисовку таблицы.


## Комментарии


Метод возобновляет перерисовку таблицы после того, как она была остановлена
 методом [IPivot.BeginUpdate](IPivot.BeginUpdate.htm). При вызове
 метода также будут применены все изменения, произведённые в таблице между
 вызовами методов [IPivot.BeginUpdate](IPivot.BeginUpdate.htm)
 и IPivot.EndUpdate.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для TabSheetBox.


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


При нажатии на кнопку для ускорения процесса обновления таблицы с данными
 будет отключена перерисовка таблицы.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
