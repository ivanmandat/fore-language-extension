# IBindingEditBox.MultiLine

IBindingEditBox.MultiLine
-


# IBindingEditBox.MultiLine


## Синтаксис


MultiLine: Boolean;


## Описание


Свойство MultiLine определяет
 значение параметра «MULTILINE»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «MULTILINE» определяет
 признак расположения текста в несколько строк. Если параметру установлено
 значение True, то в редакторе
 можно будет задавать текст в несколько строк, иначе нельзя.


Свойство MultiLine доступно
 для использования, если свойству [IBindingEditBox.MultiLineDefined](IBindingEditBox.MultiLineDefined.htm)
 установлено значение True. При
 изменении свойства MultiLine свойству
 [IBindingEditBox.MultiLineDefined](IBindingEditBox.MultiLineDefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateEditBoxBidning(Text: String): String;

	Var

	    BM: IBindingManager;

	    EditBoxBinding: IBindingEditBox;

	Begin

	    BM := New BindingManager.Create;

	    EditBoxBinding := BM.CreateByUi("EditBox") As IBindingEditBox;

	    EditBoxBinding.Mandatory := True;

	    EditBoxBinding.MaxLength := 30;

	    EditBoxBinding.MultiLine := True;

	    EditBoxBinding.ReadOnly := False;

	    EditBoxBinding.Value := Text;

	    Return EditBoxBinding.AsString;

	End Function CreateEditBoxBidning;


Данная функция генерирует строку связи для использования редактора строковых
 значений. В редакторе будет возможность задать текст в несколько строк,
 максимальная длина текста - 30 символов. Текст редактора по умолчанию
 передается посредством входного параметра Text.


См. также:


[IBindingEditBox](IBindingEditBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
