# IRdsDictionaryBox.ShowHints

IRdsDictionaryBox.ShowHints
-


# IRdsDictionaryBox.ShowHints


## Синтаксис


ShowHints: Boolean;


## Описание


Свойство ShowHints определяет,
 будут ли отображаться всплывающие подсказки при задержке мыши над элементами
 компонента [RdsDictionaryBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/RdsDictionaryBox.htm).


## Комментарии


Если свойству установлено значение True,
 то при задержке курсора мыши над элементом будет отображена всплывающая
 подсказка. Текст всплывающей подсказки будет соответствовать наименованию
 элемента.


При установке ShowHints значения
 True всплывающая подсказка, установленная
 в компоненте через свойства [IControl.ShowHint](ModForms.chm::/Interface/IControl/IControl.ShowHint.htm)
 и [IControl.Hint](ModForms.chm::/Interface/IControl/IControl.Hint.htm),
 игнорируется.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента CheckBox с наименованием
 «CheckBox1», компонента RdsDictionaryBox с наименованием
 «RdsDictionaryBox1» и компонента
 UiRdsDictionary, являющегося источником
 данных для «RdsDictionaryBox1».


			Sub CheckBox1OnChange(Sender: Object; Args: IEventArgs);

Begin

    RdsDictionaryBox1.ShowHints:=CheckBox1.Checked;

End Sub CheckBox1OnChange;


После выполнения примера при установке флажка для элементов компонента
 [RdsDictionaryBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/RdsDictionaryBox.htm)
 будут отображаться всплывающие подсказки.


См. также:


[IRdsDictionaryBox](IRdsDictionaryBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
