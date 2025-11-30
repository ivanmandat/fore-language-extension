# Пример создания компонента TreeList

Пример создания компонента TreeList
-


# Пример создания компонента TreeList


Перед выполнением примера ознакомьтесь с [рекомендациями](dhtml.chm::/specification/JavaScript_main.htm)
 к написанию кода. На одном уровне с html-страницей должен содержаться
 файл с наименованием treeImagesIcons.png.


Для создания компонента [TreeList](TreeList.htm) используйте
 HTML-код:


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>TreeList</title>
    <script src="../build/PP.js" type="text/javascript"></script>
    <link href="../build/PP.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div id="simpl"></div>
    <script type="text/javascript">
        var treeListSett = new PP.Ui.TreeList({
            // Зададим html-контейнер для компонента
            ParentNode: document.getElementById('simpl'),
            // Включим отображение заголовков столбцов
            CaptionVisible: true,
            // Отключим выделение области дерева
            AreaSelect: false,
            // Включим перенос по словам
            WordWrap: true,
            // Разрешим изменять ширину столбцов
            EnableResizeColumn: true,
            // Включим отображение заголовков столбцов
            ShowColumns: true,
            // Разрешим редактировать значения в ячейках таблицы
            EnableEdit: true,
            // Выделим редактируемый текст
            SelectEditorText: true,
            // Отключим множественный выбор
            MultiSelect: false,
            // Включим множественное перемещение для режима Drag&Drop
            DragAndDropMode: "MultiDrag",
            // Установим видимость пиктограммы меню для возможности редактирования видимости столбцов
            EnableColumnsMenu: true,
            // Отключим учёт регистра при фильтрации
            FilterCaseSensitive: false,
            // Установим сброс выделения при фильтрации
            FilterDeSelect: true,
            // Отключим режим, при котором первое нажатие с зажатой кнопкой SHIFT снимает выделение со всех выделенных элементов, кроме текущего
            FirstShiftSelectClearing: false,
            // Установим игнорирование правого отступа внутри объекта
            IgnoreRightPadding: true,
            // Установим изменение отображения дерева и изменение свойства hasChild у вершин во время работы режима Drag&Drop
            KeepHasChild: true,
            // Установим промежуток времени перед загрузкой дерева
            LoadingTimeout: 1000,
            // Зададим набор изображений
            ImageList: new PP.ImageList({
                Source: "treeImagesIcons.png",
                IconHeight: 20,
                IconWidth: 18
            }),
            // Включим отображение соединительной линии между вершиной и дочерними элементами
            ShowLines: true,
            Height: 150,
            Width: 400,
            // Включим отображение флажков
            CheckBoxes: true,
            // Отключим раскрытие вершины при двойном щелчке
            DblClickExpand: false,
            // Включим возможность перетаскивания вершин
            EnableDragAndDrop: true,
            // Зададим задержку перед активацией режима перетаскивания - 1 секунда
            DragAndDropDelay: 1000,
            // Включим возможность поиска элементов дерева
            EnableSearch: true,
            // Разрешим множественную отметку с помощью удержания SHIFT или CTRL
            IsCSMultiSelect: true,
            // Включим выделение элемента при щелчке правой кнопки мыши
            RightButtonSelect: true,
            SortSequence: [2,1,0], // порядок сортировки: по убыванию - по возрастанию - без сортировки
            // Зададим столбцы
            Columns: [{
                Caption: "Country",
                Width: 200,
                MinWidth: 50,
                Visible: true
            }, {
                Caption: "Population, total",
                Width: 100,
                MinWidth: 50,
                Visible: true
            }, {
                Caption: "GDP, PPP",
                Width: 100,
                MinWidth: 50,
                Visible: false
            }, {
                Caption: "GPD per capita, PPP",
                Width: 100,
                MinWidth: 10,
                Visible: false
            }],
            // Зададим вершины:
            Nodes: [{
                Text: "World",
                Columns: ["", "", ""],
                ImageIndex: 1,
                Selected: false,
                CanSelect: true,
                Value: "TestValue",
                Expanded: true,
                Checked: true,
                Nodes: [{
                    Text: "Africa",
                    Columns: [],
                    Selected: false,
                    CanSelect: true,
                    Value: "TestValue",
                    Expanded: true,
                    Checked: false,
                    Nodes: [{
                        Text: "South Africa",
                        Columns: ["460297895012,55", "9332,86", "49320150,00"],
                        ImageUrl: null,
                        ImageIndex: 0,
                        Selected: false,
                        CanSelect: true,
                        Value: "TestValue",
                        Expanded: true,
                        Checked: false
                    }, {
                        Text: "Egypt",
                        Columns: ["427532757687,93", "5151,03", "82999393,00"],
                        ImageUrl: null,
                        ImageIndex: 1,
                        Selected: false,
                        CanSelect: true,
                        Value: "TestValue",
                        Expanded: true,
                        Checked: false
                    }, {
                        Text: "Algeria",
                        Columns: ["258963578613,94", "7421,12", "34895470,00"],
                        ImageUrl: null,
                        ImageIndex: 2,
                        Selected: false,
                        CanSelect: true,
                        Value: "TestValue",
                        Expanded: true,
                        Checked: false
                    },]
                }]
            }]
        })
    </script>
</body>
</html>

В результате выполнения примера на html-странице будет размещен компонент
 [TreeList](TreeList.htm):


![](treelist2.png)


См. также:


[TreeList](TreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
