#ifndef JSON_GLOBAL_H
#define JSON_GLOBAL_H

#include <QtCore/qglobal.h>

#if defined(plexyjson_EXPORTS)
#  define JSONSHARED_EXPORT Q_DECL_EXPORT
#else
#  define JSONSHARED_EXPORT Q_DECL_IMPORT
#endif

#endif // JSON_GLOBAL_H
