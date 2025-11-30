# IBindingIdentEdit.AllowDot

IBindingIdentEdit.AllowDot
-


# IBindingIdentEdit.AllowDot


## Синтаксис


AllowDot: Boolean;


## Описание


Свойство AllowDot определяет
 значение параметра «ALLOWDOT»
 в [строке связи](../IBindingValue/IBindingValue.AsString.htm).


## Комментарии


Параметр «ALLOWDOT» определяет
 возможность включения символа «.» в значение редактора. По умолчанию параметр
 имеет значение «True», при этом
 присутствует возможность установить «.» в редактируемое значение.


Свойство AllowDot доступно для
 использования, если свойству [IBindingIdentEdit.AllowDotDefined](IBindingIdentEdit.AllowDotDefined.htm)
 установлено значение True. При
 изменении свойства AllowDot свойству
 [IBindingIdentEdit.AllowDotDefined](IBindingIdentEdit.AllowDotDefined.htm)
 автоматически устанавливается значение True.


## Пример


	Function CreateIdentEditBidning(DefaultValue: String): String;

	Var

	    BM: IBindingManager;

	    IdentEditBinding: IBindingIdentEdit;

	Begin

	    BM := New BindingManager.Create;

	    IdentEditBinding := BM.CreateByUi("IdentEdit") As IBindingIdentEdit;

	    IdentEditBinding.AllowDot := True;

	    IdentEditBinding.Value := DefaultValue;

	    Return IdentEditBinding.AsString;

	End Function CreateIdentEditBidning;


Данная функция генерирует строку связи для использования редактора идентификаторов.
 В идентификаторе можно будет использовать символ «.», значение редактора
 по умолчанию передается посредством входного параметра «DefaultValue».


См. также:


[IBindingIdentEdit](IBindingIdentEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
