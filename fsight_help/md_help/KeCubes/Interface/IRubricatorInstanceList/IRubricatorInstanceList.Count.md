# IRubricatorInstanceList.Count

IRubricatorInstanceList.Count
-


# IRubricatorInstanceList.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество баз данных временных рядов в коллекции.


## Комментарии


Емкость коллекции - это количество элементов, которое может содержать коллекция. Свойство Count - это количество элементов, которое в действительности содержится в коллекции.


Емкость всегда больше или равна значению свойства Count. Если при добавлении элементов в коллекцию значение свойства Count превышает емкость, то она автоматически увеличивается.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с наименованием «Button1», компонента LanerBox и компонента UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных для LanerBox. В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных рядов в рядном режиме. Также необходимо добавить ссылки на системные сборки «Cubes» и «Metabase».


Пример будет выполняться при нажатии на кнопку.


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        Laner: ILaner;

        RubList: IRubricatorInstanceList;

        i: Integer;

        RubrInst: IRubricatorInstance;

    Begin

        Laner := UiErAnalyzer1.ErAnalyzer.Laner;

        RubList := Laner.UsedRubricators;

        For i := 0 To RubList.Count - 1 do

            RubrInst := RubList.Item(i);

            Debug.WriteLine((RubrInst.Rubricator As IMetabaseObject).Name);

        End For;

    End Sub Button1OnClick;


После выполнения примера в окно консоли будут выведены наименования баз данных временных рядов, являющихся источниками данных для загруженной рабочей книги.


См. также:


[IRubricatorInstanceList](IRubricatorInstanceList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
