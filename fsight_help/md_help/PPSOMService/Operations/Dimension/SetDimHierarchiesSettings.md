# SetDimHierarchiesSettings: Операция

SetDimHierarchiesSettings: Операция
-


**


# SetDimHierarchiesSettings


## Синтаксис


bool SetDimHierarchiesSettings(DmId tDim, DimHierarchiesSettingsArg
 tArg)


## Параметры


tDim. Моникёр
 экземпляра справочника.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDimHierarchiesSettings
 изменяет информацию об альтернативных иерархиях справочника.


## Комментарии


Операция позволяет создавать новые или удалять альтернативные иерархии,
 а так же менять настройки имеющихся альтернативных иерархий. Для выполнения
 операции укажите в поле tDim моникёр
 справочника, а в поле tArg параметры
 изменения альтернативных иерархий. Моникёр может быть получен при выполнении
 операции [OpenDim](OpenDim.htm). После внесения изменений для
 сохранения справочника используйте операцию [SaveObject](../Repository/SaveObject.htm)
 или [SaveObjectAs](../Repository/SaveObjectAs.htm).


Результатом операции будет логическое значение true,
 если применение изменений завершилось успешно.


## Пример


Ниже приведён пример добавления альтернативной иерархии в структуру
 справочника. В запросе передаётся моникёр экземпляра справочника и параметры
 создаваемой альтернативной иерархии. В ответе приходит признак удачного
 создания.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDimHierarchiesSettings xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tDim xmlns="****">
  <id>S1!M!S!DM1</id>  </tDim>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <hiersOper>Add</hiersOper>[![](../../minus.gif)](../../#)<hiers>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
  <vis>true</vis>  <sourceDimKey>154</sourceDimKey>  <sourceDimCls>1025</sourceDimCls>  <originalDimKey>293441</originalDimKey>[![](../../minus.gif)](../../#)<sourceIndex>
  <k>156</k>  <id>INDEX1</id>  <n>Индекс1</n>  <vis>true</vis>  </sourceIndex>
[![](../../minus.gif)](../../#)<attributesBindings>
[![](../../minus.gif)](../../#)<it>
  <originalAttrId>NAME</originalAttrId>  <sourceAttrId>NAME</sourceAttrId>  </it>
[![](../../minus.gif)](../../#)<it>
  <originalAttrId>ID</originalAttrId>  <sourceAttrId>ID</sourceAttrId>  </it>
[![](../../minus.gif)](../../#)<it>
  <originalAttrId>ORDER</originalAttrId>  <sourceAttrId>ORDER</sourceAttrId>  </it>
[![](../../minus.gif)](../../#)<it>
  <originalAttrId>PARENT</originalAttrId>  <sourceAttrId>PARENT</sourceAttrId>  </it>
  </attributesBindings>
  </it>
  </its>
[![](../../minus.gif)](../../#)<originalIndex>
  <k>155</k>  <id>INDEX1</id>  <n>Индекс1</n>  <vis>true</vis>  </originalIndex>
  </hiers>
  </tArg>
  </SetDimHierarchiesSettings>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetDimHierarchiesSettingsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetDimHierarchiesSettingsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDimHierarchiesSettings" :
  {
   "tDim" :
    {
     "id" : "S1!M!S!DM1"
    },
   "tArg" :
    {
     "hiersOper" : "Add",
     "hiers" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "-1",
             "id" : "",
             "n" : "",
             "vis" : "true",
             "sourceDimKey" : "154",
             "sourceDimCls" : "1025",
             "originalDimKey" : "293441",
             "sourceIndex" :
              {
               "k" : "156",
               "id" : "INDEX1",
               "n" : "Индекс1",
               "vis" : "true"
              },
             "attributesBindings" :
              {
               "it" :
                [
                  {
                   "originalAttrId" : "NAME",
                   "sourceAttrId" : "NAME"
                  },
                  {
                   "originalAttrId" : "ID",
                   "sourceAttrId" : "ID"
                  },
                  {
                   "originalAttrId" : "ORDER",
                   "sourceAttrId" : "ORDER"
                  },
                  {
                   "originalAttrId" : "PARENT",
                   "sourceAttrId" : "PARENT"
                  }
                ]
              }
            }
          ]
        },
       "originalIndex" :
        {
         "k" : "155",
         "id" : "INDEX1",
         "n" : "Индекс1",
         "vis" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetDimHierarchiesSettingsResult" : "1"
}


public static bool AddHierarchy(string moniker, DmHier newHierarchy, ItEntity index)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetDimHierarchiesSettings()
    {
        tArg = new DimHierarchiesSettingsArg()
        {
            hiersOper = ListOperation.Add,
            hiers = new DimHierarchies
            {
                its = new DmHier[1]
                {
                    newHierarchy
                },
                originalIndex = index,
            }
        },
        tDim = new DmId() { id = moniker }
    };
    //Добавление новой иерархии
    var result = somClient.SetDimHierarchiesSettings(tSet);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
