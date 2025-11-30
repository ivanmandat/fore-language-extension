# IRdsAttribute.Nullable

IRdsAttribute.Nullable
-


# IRdsAttribute.Nullable


## Синтаксис


Nullable: Boolean;


## Описание


Свойство Nullable определяет,
 может ли элемент по данному атрибуту иметь пустое значение.


## Комментарии


На значение Nullable влияет
 свойство [IRdsAttribute.VisibleForEdit](IRdsAttribute.VisibleForEdit.htm).
 Таким образом, значение Nullable
 следует изменять после значения [IRdsAttribute.VisibleForEdit](IRdsAttribute.VisibleForEdit.htm).


Допустимые значения Nullable:


	- True. Атрибут не является
	 обязательным для заполнения и может содержать пустые значения;


	- False. Каждый элемент
	 справочника должен иметь значение данного атрибута.


## Пример


Использование свойства приведено в примере для [IRdsAttribute.TimeDependent](IRdsAttribute.TimeDependent.htm).


См. также:


[IRdsAttribute](IRdsAttribute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
