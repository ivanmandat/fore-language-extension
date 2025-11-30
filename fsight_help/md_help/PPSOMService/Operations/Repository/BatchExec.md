# BatchExec: Операция

BatchExec: Операция
-


**


# BatchExec


## Синтаксис


BatchExecResult BatchExec(BatchExecArg tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция BatchExec предназначена
 для пакетного выполнения других операций.


## Комментарии


Данная операция позволяет выполнять несколько операций за один раз.
 Результатом операции BatchExec
 являются результаты выполнения всех операций. Для пакетного выполнения
 задайте в поле tArg.its коллекцию
 параметров выполнения отдельных операций, сериализованных в JSON/XML.
 Результатом выполнения операции BatchExec
 будет коллекция результатов выполнения отдельных операций, также представленных
 в JSON/XML. Для дальнейшей работы с результатами потребуется их десериализация
 из JSON/XML. Если при выполнении какой-либо операции возникает ошибка,
 то информация об ошибке будет доступна в результате вместо фактического
 результата выполнения. Режим выполнения операций при возникновении ошибки
 в какой-либо отдельной операции определяет поле tArg.bIgnoreError.


## Пример


Для выполнения примера на C# используются две процедуры расширения,
 позволяющие произвести сериализацию и десериализацию из XML.


[![](../../Opened.gif)![](../../Closed.gif)Extensions](javascript:TextPopup(this))


    public static class Extensions
    {
        /// Сериализация объекта в XML
        public static System.Xml.XmlElement ObjectToXml(this object o)
        {
            var serializer = new System.Xml.Serialization.XmlSerializer(o.GetType());
            var writer = new System.IO.StringWriter();
            serializer.Serialize(writer, o);
            var doc = new System.Xml.XmlDocument();
            doc.LoadXml(writer.ToString());
            writer.Close();
            var xml = doc.DocumentElement;
            return xml;
        }
        /// Десериализация объекта из XML
        public static Object XmlToObject(Type type, System.Xml.XmlElement xml)
        {
            var reader = new System.IO.StringReader(xml.OuterXml);
            var serializer = new System.Xml.Serialization.XmlSerializer(type);
            return serializer.Deserialize(reader);
        }
    }


Пример пакетного выполнения двух операций по извлечению метаданных экспресс-отчета.
 В запросе передается два шаблона выполнения операций, в ответе приходит
 два результата выполнения этих операций.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<BatchExec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<GetEaxMd>
[![](../../minus.gif)](../../#)<tEax>
  <id>S2!M!S!E1</id>  </tEax>
[![](../../minus.gif)](../../#)<tArg>
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <dataSources>Get</dataSources>  </pattern>
  </tArg>
  </GetEaxMd>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<GetEaxMd>
[![](../../minus.gif)](../../#)<tEax>
  <id>S2!M!S!E1</id>  </tEax>
[![](../../minus.gif)](../../#)<tArg>
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <sheets>Get</sheets>  </pattern>
  </tArg>
  </GetEaxMd>
  </it>
  </its>
  <bIgnoreError>true</bIgnoreError>  </tArg>
  </BatchExec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<BatchExecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<GetEaxMdResult xmlns="****" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id>
  <id>S2!M!S!E1</id>  </id>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**/**">
  <i>EXPRESS_1</i>  <n>Экспресс-отчет</n>  <k>189</k>  <c>2561</c>  <p>182</p>  <h>0</h>  </obDesc>
  <openArgs />
  </obInst>
[![](../../minus.gif)](../../#)<dataSources>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>OBJ183</id>  <n>Куб (элементы)</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<cube>
[![](../../minus.gif)](../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**/**">
  <i>OBJ183</i>  <n>Куб (элементы)</n>  <k>186</k>  <c>1287</c>  <p>182</p>  <h>0</h>  </obDesc>
[![](../../minus.gif)](../../#)<dest>
  <k>1</k>  <id>OBJ183</id>  </dest>
  </cube>
  </it>
  </its>
  </dataSources>
  <windowsPosition>Maximized</windowsPosition>  <hasPivot>1</hasPivot>  </meta>
  </GetEaxMdResult>
  </it>
[![](../../minus.gif)](../../#)<it>
[![](../../minus.gif)](../../#)<GetEaxMdResult xmlns="****" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id>
  <id>S2!M!S!E1</id>  </id>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc isShortcut="**0**" isLink="**0**" fullUrl="**/**">
  <i>EXPRESS_1</i>  <n>Экспресс-отчет</n>  <k>189</k>  <c>2561</c>  <p>182</p>  <h>0</h>  </obDesc>
  <openArgs />
  </obInst>
[![](../../minus.gif)](../../#)<sheets>
  <active>0</active>[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>189</k>  <id>SHEET1</id>  <n>Лист1</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<eax>
  <id>S2!M!S!E1</id>  </eax>
  <isActive>1</isActive>  </it>
  </its>
  </sheets>
  <windowsPosition>Maximized</windowsPosition>  <hasPivot>1</hasPivot>  </meta>
  </GetEaxMdResult>
  </it>
  </its>
  <bSucceeded xmlns="****">1</bSucceeded>  </BatchExecResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "BatchExec" :
  {
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "GetEaxMd" :
            {
             "tEax" :
              {
               "id" : "S2!M!S!E1"
              },
             "tArg" :
              {
               "pattern" :
                {
                 "obInst" : "true",
                 "dataSources" : "Get"
                }
              }
            }
          },
          {
           "GetEaxMd" :
            {
             "tEax" :
              {
               "id" : "S2!M!S!E1"
              },
             "tArg" :
              {
               "pattern" :
                {
                 "obInst" : "true",
                 "sheets" : "Get"
                }
              }
            }
          }
        ]
      },
     "bIgnoreError" : "true"
    }
  }
}

### JSON-ответ:


{
 "BatchExecResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "GetEaxMdResult" :
          {
           "id" :
            {
             "id" : "S2!M!S!E1"
            },
           "meta" :
            {
             "obInst" :
              {
               "obDesc" :
                {
                 "@isShortcut" : "0",
                 "@isLink" : "0",
                 "i" : "EXPRESS_1",
                 "n" : "Экспресс-отчет",
                 "k" : "189",
                 "c" : "2561",
                 "p" : "182",
                 "h" : "0"
                },
               "openArgs" : ""
              },
             "dataSources" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "1",
                     "id" : "OBJ183",
                     "n" : "Куб (элементы)",
                     "vis" : "1",
                     "cube" :
                      {
                       "obDesc" :
                        {
                         "@isShortcut" : "0",
                         "@isLink" : "0",
                         "i" : "OBJ183",
                         "n" : "Куб (элементы)",
                         "k" : "186",
                         "c" : "1287",
                         "p" : "182",
                         "h" : "0"
                        },
                       "dest" :
                        {
                         "k" : "1",
                         "id" : "OBJ183"
                        }
                      }
                    }
                  ]
                }
              },
             "windowsPosition" : "Maximized",
             "hasPivot" : "1"
            }
          }
        },
        {
         "GetEaxMdResult" :
          {
           "id" :
            {
             "id" : "S2!M!S!E1"
            },
           "meta" :
            {
             "obInst" :
              {
               "obDesc" :
                {
                 "@isShortcut" : "0",
                 "@isLink" : "0",
                 "i" : "EXPRESS_1",
                 "n" : "Экспресс-отчет",
                 "k" : "189",
                 "c" : "2561",
                 "p" : "182",
                 "h" : "0"
                },
               "openArgs" : ""
              },
             "sheets" :
              {
               "active" : "0",
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "189",
                     "id" : "SHEET1",
                     "n" : "Лист1",
                     "vis" : "1",
                     "eax" :
                      {
                       "id" : "S2!M!S!E1"
                      },
                     "isActive" : "1"
                    }
                  ]
                }
              },
             "windowsPosition" : "Maximized",
             "hasPivot" : "1"
            }
          }
        }
      ]
    },
   "bSucceeded" : "1"
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


public static BatchExecResult BatchExec(EaxId eax)
{
    //Параметры выполнения первой операции
    var tGet1 = new GetEaxMd()
    {
        tArg = new GetEaxMdArg()
        {
            pattern = new EaxMdPattern()
            {
                dataSources = ListOperation.Get
            }
        },
        tEax = eax
    };
    //Параметры выполнения второй операции
    var tGet2 = new GetEaxMd()
    {
        tArg = new GetEaxMdArg()
        {
            pattern = new EaxMdPattern()
            {
                sheets = ListOperation.Get
            }
        },
        tEax = eax
    };
    //Сериализация параметров в XML
    var tGetXml1 = tGet1.ObjectToXml();
    var tGetXml2 = tGet2.ObjectToXml();
    //Пакетное выполнение операций
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tExec = new BatchExec()
    {
        tArg = new BatchExecArg()
        {
            bIgnoreError = true,
            //Указание параметров операций, которые будут выполнены в рамках одного запроса
            its = new System.Xml.XmlElement[2] { tGetXml1, tGetXml2 }
        }
    };
    //Выполнение метода
    var result = somClient.BatchExec(tExec);
    return result;
}


См. также:


[Специфические
 операции](Specific_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
