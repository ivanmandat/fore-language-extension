# Конструткор TreeColumns

Конструткор TreeColumns
-


# Конструктор TreeColumns


## Синтаксис


PP.Ui.TreeColumns (Owner: PP.Ui.[TreeList](../TreeList/TreeList.htm));


## Параметры


Owner. Родительский
 компонент [TreeList](../../Components/TreeList/TreeList.htm).


## Описание


Конструктор TreeColumns создает
 экземпляр класса [TreeColumns](TreeColumns.htm).


## Пример


Для выполнения примера создадим компонент [TreeList](../../Components/TreeList/TreeList.htm)
 и добавим в компонент столбец.


var treeList = new PP.Ui.TreeList(


{


  ParentNode: document.getElementById("treelist"),


  Width: 300,


  Height: 100


});


var columns = new PP.Ui.TreeColumns(treeList);


columns.add(new PP.Ui.TreeColumn(


{


  Caption: "Country",


  Width: 100,


  MinWidth: 50,


  Visible: true


}));


treeList.setColumns(columns);


После выполнения примера будет создан компонент [TreeList](../../Components/TreeList/TreeList.htm),
 содержащий столбец с заголовком «Country».


См. также:


[TreeColumns](TreeColumns.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
