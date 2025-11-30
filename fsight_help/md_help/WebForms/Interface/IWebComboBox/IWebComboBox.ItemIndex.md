# IWebComboBox.ItemIndex

IWebComboBox.ItemIndex
-


# IWebComboBox.ItemIndex


## Синтаксис


ItemIndex: Integer;


## Описание


Свойство ItemIndex определяет
 индекс выбранного элемента списка.


## Комментарии


По умолчанию свойству установлено значение «-1», при этом ни один элемент
 списка не выбран.


## Пример


Для выполнения примера в репозитории предполагается наличие веб-формы
 и расположенного на ней компонента ComboBox с наименованием ComboBox1.
 Указанная процедура установлена в качестве обработчика события OnShow
 для веб-формы.


Добавьте ссылку на системную сборку Collection.


	Sub TESTWebFormOnShow;

	Var

	    Items: IStringList;

	Begin

	    Items := New StringList.Create;

	    Items.Add("A");

	    Items.Add("B");

	    Items.Add("C");

	    Items.Add("D");

	    // Настройка компонента

	    ComboBox1.BeginUpdate;

	    ComboBox1.Items := Items;

	    ComboBox1.ItemIndex := 0;

	    ComboBox1.EndUpdate;

	End Sub TESTWebFormOnShow;


При запуске веб-формы в компоненте ComboBox1 будет сформирован список
 элементов и выбран первый элемент.


См. также:


[IWebComboBox](IWebComboBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
