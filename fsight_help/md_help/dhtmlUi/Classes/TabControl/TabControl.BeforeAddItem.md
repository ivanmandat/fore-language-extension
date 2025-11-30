# TabControl.BeforeAddItem

TabControl.BeforeAddItem
-


# TabControl.BeforeAddItem


## Синтаксис


BeforeAddItem: function (sender, args: PP.[TabControlArgs](../TabControlArgs/TabControlArgs.htm));


## Параметры


sender. Источник события;


args. Информация
 о событии.


## Описание


Событие BeforeAddItem наступает
 перед добавлением [новой
 вкладки](TabControl.IsAddTabButtonVisible.htm).


## Комментарии


Событие не наступает при добавлении вкладок с помощью метода [TabControl.addItem](TabControl.addItem.htm), только при добавлении
 с использованием [специальной
 вкладки со знаком «+»](TabControl.IsAddTabButtonVisible.htm).


## Пример


Для выполнения примера подключите библиотеку компонентов PP.js и таблицы
 визуальных стилей PP.css. Создадим компонент [TabControl](../../Components/TabControl/TabControl.htm),
 который включает в себя [вкладку
 для добавления новых вкладок](TabControl.IsAddTabButtonVisible.htm). Добавим обработчик события BeforeAddItem:


//Создаем компонент TabControl:
var tabcontrol = new PP.Ui.TabControl({
  //Идентификатор для тега div
   ParentNode: document.getElementById("tabcont1"),
               Width: 300,
               Height: 200,
                //Путь к папке с изображениями:
               ImagePath: "img"
});
//Добавляем невидимую вкладку в компонент TabControl:
tabcontrol.addItem(new PP.Ui.TabItem({
   Position: PP.LTRB.Top,
   IsVisible: false
}));
//Добавляем обработчик события BeforeAddItem:
tabcontrol.BeforeAddItem.add(onBeforeAddItem);
var ItemsInc = 0;
//Обработчик события BeforeAddItem:
function onBeforeAddItem(sender, args) {
   if (ItemsInc > 5) {
      args.Cancel = true;
      alert("Вкладка не добавлена. Можно добавить только 6 новых вкладок.");
   }
   else {
      args.Item.setCaption("Вкладка" + ItemsInc);
      args.Item.setContent("<div><div style='text-align:center; padding-top:70px'>Содержимое вкладки " + ItemsInc + "</div></div>");
      ItemsInc++;
   }
};

После выполнения примера на html-странице будет размещен компонент [TabControl](../../Components/TabControl/TabControl.htm),
 состоящий из одной невидимой вкладки и вкладки для добавления новых вкладок.
 При нажатии на вкладку со знаком «+» будет добавлена вкладка с заголовком
 «Вкладка + порядковый номер вкладки» и содержимое с текстом «Содержимое
 вкладки + порядковый номер вкладки». После того как будет добавлено 6
 новых вкладок (0-5) при нажатии на вкладку «+» на экран будет выведено
 сообщение «Вкладка не добавлена. Можно добавить только 6 новых вкладок».
 Новая вкладка не будет добавлена.


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
