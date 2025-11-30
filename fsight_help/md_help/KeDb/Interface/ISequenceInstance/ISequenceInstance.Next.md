# ISequenceInstance.Next

ISequenceInstance.Next
-


# ISequenceInstance.Next


## Синтаксис


Next: Integer;


## Описание


Метод Next генерирует следующее число последовательности.


## Пример


Для выполнения примера на форме предполагается наличие кнопки с наименованием "Button1". Должна быть добавлена ссылка на системную сборку Db. В репозитории предполагается наличие таблицы последовательности с идентификатором "PP_SERVICE_LOG_SEQ".


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    MB: IMetabase;

    SeqInst: ISequenceInstance;

    key: Integer;

Begin

    MB := MetabaseClass.Active;

    SeqInst := MB.ItemById("PP_SERVICE_LOG_SEQ").Open(Null) As ISequenceInstance;

    key := SeqInst.Next;

    Debug.WriteLine(key);

End Sub Button1OnClick;


После выполнения примера в окно консоли будет выведено следующее число последовательности.


См. также:


[ISequenceInstance](ISequenceInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
