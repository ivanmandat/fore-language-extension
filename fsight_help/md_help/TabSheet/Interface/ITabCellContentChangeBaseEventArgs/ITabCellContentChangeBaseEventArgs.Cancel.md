# ITabCellContentChangeBaseEventArgs.Cancel

ITabCellContentChangeBaseEventArgs.Cancel
-


# ITabCellContentChangeBaseEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет, будет ли отменено изменение содержимого ячейки.


## Комментарии


Если свойству установить значение True, то изменение содержимого ячейки будет отменено.


По умолчанию свойству установлено значение False.


## Пример


Для выполнения примера предполагается наличие формы, расположенного на ней компонента LanerBox с наименованием «LanerBox1» и компонента UiErAnalyzer являющегося источником данных для «LanerBox1». UiErAnalyzer подключен к какой-либо рабочей книге базы данных временных рядов.


Данная процедура установлена в качестве обработчика события OnChangeCellContent компонента «LanerBox1».


			    Sub LanerBox1OnChangeCellContent(Sender: Object; Args: ITabCellContentChangeBaseEventArgs);

    Begin

        If Args.Type = TabCellContentChange.Value Then

            If Args.Value > 1000 Then

                Args.Cancel := True;

            End If;

        End If;

    End Sub LanerBox1OnChangeCellContent;


При выполнении события будет осуществлена проверка изменений в ячейке таблицы. Если изменяется значение и устанавливаемое значение больше 1000, то установка нового значения будет отменена.


См. также:


[ITabCellContentChangeBaseEventArgs](ITabCellContentChangeBaseEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
