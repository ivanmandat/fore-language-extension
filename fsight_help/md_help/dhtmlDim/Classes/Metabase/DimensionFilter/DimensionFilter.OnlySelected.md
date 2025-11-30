# DimensionFilter.OnlySelected

DimensionFilter.OnlySelected
-


# DimensionFilter.OnlySelected


## Синтаксис


OnlySelected: Boolean;


## Описание


Свойство OnlySelected определяет
 фильтрацию только отмеченных элементов измерения.


## Комментарии


Значение свойства устанавливается из JSON. Возвращается с помощью метода
 getOnlySelected().


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)»). На боковой панели
 должна быть выбрана вкладка измерения и задано значение в строке поиска.
 Получим параметры фильтрации измерения:


// Получим боковую панель
PropBar = expressBox.getPropertyBarView();
// Получим элемент управления боковой панели
Control = PropBar.getControl();
// Получим вкладку боковой панели
Panel = Control.getActiveItem();
// Получим представление дерева элементов измерения
TreeV = Panel.getDimTreeView();
// Получим экземпляр фильтра
Filter = TreeV.getCurrentFilter();
// Выведем в консоль параметры фильтрации
console.debug("Фильтровать по тексту: " + Filter.getTextValue());
console.debug("Фильтровать только отмеченные элементы: " + Filter.getOnlySelected());
console.debug("Фильтровать только элементы с данными: " + Filter.getOnlyWithData());
console.debug("Параметры сортировки: " + JSON.stringify(c2.getOrderBy()));
console.debug("Параметры сортировки в формате JSON: ");
console.debug(JSON.stringify(c2.getOrderByJSON(), null, 2));
В результате выполнения примера в консоль были выведены параметры сортировки:


Фильтровать по тексту: 200


Фильтровать только отмеченные элементы: false


Фильтровать только элементы с данными: false


Параметры сортировки: [{"NAME":"Desc"}]


Параметры сортировки в формате JSON:


{


  "its": {


    "it": [


      {


        "att":
 {


          "id":
 "NAME"


        },


        "asc":
 false


      }


    ]


  }


}


См. также:


[DimensionFilter](DimensionFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
