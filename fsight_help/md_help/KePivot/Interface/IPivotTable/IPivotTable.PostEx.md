# IPivotTable.PostEx

IPivotTable.PostEx
-


# IPivotTable.PostEx


## Синтаксис


PostEx(Excluded: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);
 [Callback: [ICubeCallback](KeCubes.chm::/Interface/ICubeCallback/ICubeCallback.htm)
 = Null]);


## Параметры


Excluded. Отметка элементов,
 изменения по которым не будут сохранены;


Callback. Объект,
 осуществляющий обработку ошибок, которые могут возникнуть при сохранении
 данных.


## Описание


Метод PostEx осуществляет выход
 из режима редактирования с сохранением измененных данных и возможностью
 указания тех данных, которые не будут сохранены.


## Комментарии


Метод сохраняет измененные данные по всем элементам, кроме тех, которые
 входят в отметку Excluded. Данный
 метод актуально использовать если имеются измененные данные по вычисляемым
 элементам так как данные по таким элементам не могут быть сохранены. Для
 получения информации о наличии измененных данных по вычисляемым элементам
 используйте свойство [IsDataChanged](IPivotTable.IsDataChanged.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1» и каких-либо визуальных компонентов, отображающих
 данные экспресс-отчета, подключенного к «UiErAnalyzer1». Экспресс-отчет
 переведен в режим редактирования данных (свойству IEaxAnalyzer.EnableEdit
 установлено значение True). К
 форме необходимо подключить системные сборки Express, Dimensions и Pivot.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Eax: IEaxAnalyzer;

    PTable: IPivotTable;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

Begin

    Eax := UiErAnalyzer1.Instance As IEaxAnalyzer;

    //Получаем отметку по вычисляемым элементам

    DimSS := Eax.DataArea.Hierarchies.AddedElementsSelection(Eax.Grid.Slice);

    PTable := Eax.Pivot.ObtainTable;

    //Если по вычисляемым элементам нет измененных данных, то используем для сохранения метод Post

    //Если есть измененные данные, то используем PostEx
 для сохранения всех изменений, кроме изменений по вычисляемым элементам

    If Not PTable.IsDataChanged(DimSS) Then

        PTable.Post;

    Else

        PTable.PostEx(DimSS);

    End If;

End Sub Button1OnClick;


При нажатии на кнопку осуществляется проверка наличия измененных данных
 по вычисляемым элементам. Если по ним изменения отсутствуют, то для выхода
 из режима редактирования используется метод Post, иначе - PostEx.


См. также:


[IPivotTable](IPivotTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
